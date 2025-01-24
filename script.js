function generateQRCode() {
  const url = document.getElementById('url').value;
  if (!url) {
    alert('Please enter a URL');
    return;
  }

  const qrcodeContainer = document.getElementById('qrcode');
  qrcodeContainer.innerHTML = ''; // Clear previous QR code

  const qrcode = new QRCode(qrcodeContainer, {
    text: url,
    width: 128,
    height: 128,
  });

  // Generate the QR code and create a download link
  qrcode.makeCode(url);
  setTimeout(() => {
    const qrCanvas = qrcodeContainer.querySelector('canvas');
    const qrDataUrl = qrCanvas.toDataURL('image/png');
    const downloadLink = document.getElementById('download');
    downloadLink.href = qrDataUrl;
  }, 100);
}
