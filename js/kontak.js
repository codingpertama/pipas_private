            document.getElementById('emailForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                const form = e.target;
                const formData = new FormData(form);
                const submitBtn = form.querySelector('button[type="submit"]');
                
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
                submitBtn.disabled = true;
                
                fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    if (response.ok) {
                        alert('Pesan berhasil dikirim! Kami akan segera menghubungi Anda.');
                        form.reset();
                    } else {
                        throw new Error('Network response was not ok');
                    }
                })
                .catch(error => {
                    alert('Terjadi kesalahan. Silahkan coba lagi atau hubungi kami melalui media sosial.');
                    console.error('Error:', error);
                })
                .finally(() => {
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Kirim Pesan';
                    submitBtn.disabled = false;
                });
            });