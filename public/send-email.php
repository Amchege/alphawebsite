<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

 $data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

// PUT YOUR RESEND API KEY HERE
 $apiKey = 're_8mDsPQsE_LA9dDGd5VV2DfjM4rYSu2pvz'; 

 $payload = json_encode([
    'from' => 'Alpha Tec Website <noreply@alphatecdesigns.co.ke>',
    'to' => ['info@alphatecdesigns.co.ke'],
    'subject' => 'New Project Inquiry: ' . ($data['projectType'] ?? 'General') . ' from ' . $data['name'],
    'html' => '
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
            <h2 style="color: #f97316;">New Project Submission</h2>
            <p><strong>Name:</strong> ' . htmlspecialchars($data['name']) . '</p>
            <p><strong>Email:</strong> ' . htmlspecialchars($data['email']) . '</p>
            <p><strong>Company:</strong> ' . htmlspecialchars($data['company'] ?? 'N/A') . '</p>
            <p><strong>Project Type:</strong> ' . htmlspecialchars($data['projectType'] ?? 'N/A') . '</p>
            <br/>
            <h3>Project Description:</h3>
            <p style="background: #f4f4f4; padding: 15px; border-radius: 5px;">' . htmlspecialchars($data['description']) . '</p>
        </div>
    '
]);

 $ch = curl_init('https://api.resend.com/emails');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $apiKey,
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

 $response = curl_exec($ch);
 $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['error' => 'Failed to send email']);
}
?>