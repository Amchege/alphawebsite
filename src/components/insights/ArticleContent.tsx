'use client';

import React from 'react';
import { Callout } from './Callout';
import { CodeBlock } from './CodeBlock';
import { MidArticleCTA } from './MidArticleCTA';

interface ArticleContentProps {
  content: string;
  slug?: string;
}

/**
 * Parses the markdown-style content into structured blocks.
 * Uses a block-level approach for reliable rendering.
 */
function parseContent(content: string, slug?: string): React.ReactNode[] {
  const lines = content.split('\n');
  const blocks: React.ReactNode[] = [];
  let i = 0;
  let blockIndex = 0;
  let hasInsertedMidCTA = false;
  const seenSlugs = new Map<string, number>();

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines
    if (trimmed === '') {
      i++;
      continue;
    }

    // H2
    if (trimmed.startsWith('## ')) {
      const text = trimmed.slice(3).trim();
      const id = slugify(text);
      blocks.push(
        <h2
          key={`block-${blockIndex++}`}
          id={id}
          className="text-2xl md:text-[1.75rem] font-bold text-white mt-14 mb-5 scroll-mt-24 border-l-2 border-orange-500/40 pl-4"
        >
          {text}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (trimmed.startsWith('### ')) {
      const text = trimmed.slice(4).trim();
      const id = slugify(text);
      blocks.push(
        <h3
          key={`block-${blockIndex++}`}
          id={id}
          className="text-xl font-semibold text-white mt-10 mb-4 scroll-mt-24"
        >
          {text}
        </h3>
      );
      i++;
      continue;
    }

    // Callout: > **TIP** or > **INFO** etc.
    if (
      trimmed.startsWith('> **') &&
      (trimmed.includes('TIP**') ||
        trimmed.includes('INFO**') ||
        trimmed.includes('IMPORTANT**') ||
        trimmed.includes('WARNING**'))
    ) {
      const typeMatch = trimmed.match(
        /\*\*(TIP|INFO|IMPORTANT|WARNING)\*\*/
      );
      const calloutType = (
        typeMatch?.[1]?.toLowerCase() || 'info'
      ) as 'info' | 'tip' | 'important' | 'warning';
      const calloutLines: string[] = [];
      i++;

      while (
        i < lines.length &&
        lines[i].trim().startsWith('>')
      ) {
        calloutLines.push(lines[i].trim().slice(1).trim());
        i++;
      }

      blocks.push(
        <Callout key={`block-${blockIndex++}`} type={calloutType}>
          {calloutLines.map((cl, ci) => (
            <p key={ci} className={ci > 0 ? 'mt-2' : ''}>
              {renderInline(cl)}
            </p>
          ))}
        </Callout>
      );
      continue;
    }

    // Blockquote (non-callout)
    if (trimmed.startsWith('> ')) {
      const bqLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        bqLines.push(lines[i].trim().slice(1).trim());
        i++;
      }
      blocks.push(
        <blockquote
          key={`block-${blockIndex++}`}
          className="my-6 pl-5 border-l-2 border-slate-700 text-slate-400 italic"
        >
          {bqLines.map((bl, bi) => (
            <p key={bi}>{renderInline(bl)}</p>
          ))}
        </blockquote>
      );
      continue;
    }

    // Code block (```)
    if (trimmed.startsWith('```')) {
      const lang = trimmed.slice(3).trim() || 'text';
      const codeLines: string[] = [];
      i++;

      while (
        i < lines.length &&
        !lines[i].trim().startsWith('```')
      ) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```

      blocks.push(
        <CodeBlock
          key={`block-${blockIndex++}`}
          code={codeLines.join('\n')}
          language={lang}
        />
      );
      continue;
    }

    // Table
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const tableRows: string[][] = [];
      while (
        i < lines.length &&
        lines[i].trim().startsWith('|') &&
        lines[i].trim().endsWith('|')
      ) {
        const rowLine = lines[i].trim();
        // Skip separator rows
        if (/^\|[\s-:|]+\|$/.test(rowLine)) {
          i++;
          continue;
        }
        const cells = rowLine
          .split('|')
          .filter((c) => c.trim() !== '')
          .map((c) => c.trim());
        tableRows.push(cells);
        i++;
      }

      if (tableRows.length > 0) {
        const headerCells = tableRows[0];
        const bodyRows = tableRows.slice(1);

        blocks.push(
          <div
            key={`block-${blockIndex++}`}
            className="my-8 overflow-x-auto rounded-lg border border-slate-800"
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900/80">
                  {headerCells.map((cell, ci) => (
                    <th
                      key={ci}
                      className="px-5 py-3.5 text-left font-semibold text-white border-b border-slate-800 whitespace-nowrap"
                    >
                      {renderInline(cell)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, ri) => (
                  <tr
                    key={ri}
                    className="border-b border-slate-800/50 last:border-b-0 hover:bg-slate-900/30 transition-colors"
                  >
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className="px-5 py-3.5 text-slate-400"
                      >
                        {renderInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // Unordered list
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const items: string[] = [];
      while (
        i < lines.length &&
        (lines[i].trim().startsWith('- ') ||
          lines[i].trim().startsWith('* '))
      ) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      blocks.push(
        <ul
          key={`block-${blockIndex++}`}
          className="my-6 space-y-2.5"
        >
          {items.map((item, ii) => (
            <li
              key={ii}
              className="flex items-start gap-3 text-slate-300 leading-relaxed"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-500/60 shrink-0" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(trimmed)) {
      const items: string[] = [];
      while (
        i < lines.length &&
        /^\d+\.\s/.test(lines[i].trim())
      ) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ''));
        i++;
      }
      blocks.push(
        <ol
          key={`block-${blockIndex++}`}
          className="my-6 space-y-2.5"
        >
          {items.map((item, ii) => (
            <li
              key={ii}
              className="flex items-start gap-3 text-slate-300 leading-relaxed"
            >
              <span className="font-mono text-xs text-orange-500/80 mt-0.5 shrink-0">
                {String(ii + 1).padStart(2, '0')}
              </span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Horizontal rule
    if (trimmed === '---' || trimmed === '***') {
      blocks.push(
        <hr
          key={`block-${blockIndex++}`}
          className="my-10 border-slate-800"
        />
      );
      i++;
      continue;
    }

    // Paragraph (fallback - collect consecutive non-special lines)
    const paraLines: string[] = [];
    while (i < lines.length) {
      const pl = lines[i].trim();
      if (
        pl === '' ||
        pl.startsWith('#') ||
        pl.startsWith('>') ||
        pl.startsWith('```') ||
        pl.startsWith('|') ||
        pl.startsWith('- ') ||
        pl.startsWith('* ') ||
        /^\d+\.\s/.test(pl) ||
        pl === '---' ||
        pl === '***'
      )
        break;
      paraLines.push(pl);
      i++;
    }

    if (paraLines.length > 0) {
      // Insert mid-article CTA after roughly 40% of paragraphs
      if (!hasInsertedMidCTA && blockIndex > 4) {
        hasInsertedMidCTA = true;
        blocks.push(<MidArticleCTA key={`mid-cta`} />);
      }

      blocks.push(
        <p
          key={`block-${blockIndex++}`}
          className="text-slate-300 leading-[1.85] mb-6 text-base"
        >
          {paraLines.map((pl, pi) => (
            <React.Fragment key={pi}>
              {pi > 0 && <br />}
              {renderInline(pl)}
            </React.Fragment>
          ))}
        </p>
      );
    }
  }

  return blocks;
}

/** Render inline markdown: bold, italic, inline code, links */
function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  // Order matters: **bold** before *italic*
  const regex =
    /(\*\*(.+?)\*\*)|(\*([^*]+?)\*)|(_([^_]+?)_)|(`([^`]+)`)|(\[([^\]]+)\]\(([^)]+)\))/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Text before match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1]) {
      // Bold **text**
      parts.push(
        <strong
          key={match.index}
          className="text-white font-semibold"
        >
          {match[2]}
        </strong>
      );
    } else if (match[3]) {
      // Italic *text*
      parts.push(
        <em key={match.index} className="text-slate-200 italic">
          {match[4]}
        </em>
      );
    } else if (match[5]) {
      // Italic _text_
      parts.push(
        <em key={match.index} className="text-slate-200 italic">
          {match[6]}
        </em>
      );
    } else if (match[7]) {
      // Inline code
      parts.push(
        <code
          key={match.index}
          className="px-1.5 py-0.5 bg-slate-800/80 text-orange-400 font-mono text-[13px] rounded"
        >
          {match[8]}
        </code>
      );
    } else if (match[9]) {
      // Link
      parts.push(
        <a
          key={match.index}
          href={match[11]}
          className="text-blue-400 hover:text-blue-300 underline underline-offset-2 decoration-blue-400/30 hover:decoration-blue-400 transition-colors"
        >
          {match[10]}
        </a>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 1 ? parts[0] : <>{parts}</>;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function ArticleContent({
  content,
  slug,
}: ArticleContentProps) {
  const blocks = React.useMemo(
    () => parseContent(content, slug),
    [content, slug]
  );

  return <div className="max-w-none">{blocks}</div>;
}