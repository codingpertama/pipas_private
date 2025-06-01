let alamatSekarang = ""; // buat nyimpan alamat user

    // Ambil lokasi saat halaman dibuka
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(posisi) {
        const lat = posisi.coords.latitude;
        const lon = posisi.coords.longitude;

        // Ubah titik lokasi jadi nama jalan / kota
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
          .then(res => res.json())
          .then(data => {
            alamatSekarang = data.display_name; // Simpan alamat
            document.getElementById("alamat").innerHTML = `<i class="fa-solid fa-location-dot" style="color: #b60303;"></i> ${alamatSekarang}`;
          })
          .catch(() => {
            document.getElementById("alamat").innerText = "Gagal mengambil alamat.";
          });
      }, function() {
        document.getElementById("alamat").innerText = "Kamu tidak mengizinkan akses lokasi.";
      });
    } else {
      document.getElementById("alamat").innerText = "Browser kamu tidak mendukung lokasi.";
    }