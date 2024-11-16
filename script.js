// Fungsi untuk menambahkan kelas aktif pada nav
function navClick(i) {
    const navBtn = document.querySelectorAll("nav.real>ul>li");
    navBtn.forEach((btn, index) => {
        btn.style.color = "#FF8A8A";  // Reset warna semua nav button
        if (index === i) {
            btn.style.color = "rgb(209, 14, 14)";  // Beri warna merah pada yang dipilih
        }
    });
}

// Menambahkan smooth scroll saat navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Ambil id target dan scroll ke posisi tersebut
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'  // Menambahkan smooth scroll
        });
    });
});

// Menyembunyikan atau menampilkan navigasi berdasarkan scroll
let lastScrollTop = 0;
const navWrapper = document.querySelector(".nav-wrapper");
let isNavVisible = false;

// Fungsi untuk memperbarui warna link saat section aktif
function updateNavLinkOnScroll(activeSectionId) {
    const navBtn = document.querySelectorAll("nav.real>ul>li");
    navBtn.forEach(btn => btn.style.color = "#FF8A8A"); // Reset warna
    
    const activeLink = document.querySelector(`a[href="#${activeSectionId}"]`);
    if (activeLink) {
        const activeLi = activeLink.closest('li');
        activeLi.style.color = "rgb(209, 14, 14)"; // Ganti warna link yang aktif
    }
}

// Intersection Observer untuk memantau section yang aktif
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const sectionId = entry.target.id;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            updateNavLinkOnScroll(sectionId); // Update warna link berdasarkan section yang terlihat
        }
    });
}, { threshold: 0.5 });  // Deteksi jika lebih dari 50% section terlihat

// Mengamati semua section
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Menyembunyikan atau menampilkan navigasi berdasarkan scroll
window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && !isNavVisible) {
        navWrapper.innerHTML = nav;
        document.querySelector(".nav-wrapper>nav").classList.add("naik");
        setTimeout(() => {
            document.querySelector(".nav-wrapper>nav").classList.remove("naik");
        }, 350);
        isNavVisible = true;
    } else if (currentScroll < lastScrollTop && currentScroll < 200) {
        document.querySelector(".nav-wrapper>nav").classList.add("turun");
        setTimeout(() => {
            navWrapper.innerHTML = "";
            isNavVisible = false;
        }, 350);
    }

    lastScrollTop = currentScroll < 0 ? 0 : currentScroll;
});



const nav = `<nav class="real">
<ul class="roboto-bold">
    <li style="color: rgb(209, 14, 14);" onclick="navClick(0)">
        <a href="#home">
            <div>
                <div class="dot">
                    <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM9.44661 15.3975C9.11385 15.1508 8.64413 15.2206 8.39747 15.5534C8.15082 15.8862 8.22062 16.3559 8.55339 16.6025C9.5258 17.3233 10.715 17.75 12 17.75C13.285 17.75 14.4742 17.3233 15.4466 16.6025C15.7794 16.3559 15.8492 15.8862 15.6025 15.5534C15.3559 15.2206 14.8862 15.1508 14.5534 15.3975C13.825 15.9373 12.9459 16.25 12 16.25C11.0541 16.25 10.175 15.9373 9.44661 15.3975Z" fill="currentColor"/>
                    </svg>
                </div>
                <p>Home</p>
            </div>
        </a>
    </li>
    <li onclick="navClick(1)">
        <a href="#about">
            <div>
                <div class="dot">
                    <svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <title>about-filled</title>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="drop" fill="currentColor" transform="translate(42.666667, 42.666667)">
                                <path d="M213.333333,3.55271368e-14 C331.154987,3.55271368e-14 426.666667,95.51168 426.666667,213.333333 C426.666667,331.153707 331.154987,426.666667 213.333333,426.666667 C95.51296,426.666667 3.55271368e-14,331.153707 3.55271368e-14,213.333333 C3.55271368e-14,95.51168 95.51296,3.55271368e-14 213.333333,3.55271368e-14 Z M234.713387,192 L192.04672,192 L192.04672,320 L234.713387,320 L234.713387,192 Z M213.55008,101.333333 C197.99616,101.333333 186.713387,112.5536 186.713387,127.704107 C186.713387,143.46752 197.698773,154.666667 213.55008,154.666667 C228.785067,154.666667 240.04672,143.46752 240.04672,128 C240.04672,112.5536 228.785067,101.333333 213.55008,101.333333 Z" id="Shape">
                    
                    </path>
                            </g>
                        </g>
                    </svg>
                </div>
                <p>About Us</p>
            </div>
        </a>
    </li>
    <li onclick="navClick(2)">
        <a href="#benefits">
            <div>
                <div class="dot">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM7.63 18.15C7.63 18.56 7.29 18.9 6.88 18.9C6.47 18.9 6.13 18.56 6.13 18.15V16.08C6.13 15.67 6.47 15.33 6.88 15.33C7.29 15.33 7.63 15.67 7.63 16.08V18.15ZM12.75 18.15C12.75 18.56 12.41 18.9 12 18.9C11.59 18.9 11.25 18.56 11.25 18.15V14C11.25 13.59 11.59 13.25 12 13.25C12.41 13.25 12.75 13.59 12.75 14V18.15ZM17.87 18.15C17.87 18.56 17.53 18.9 17.12 18.9C16.71 18.9 16.37 18.56 16.37 18.15V11.93C16.37 11.52 16.71 11.18 17.12 11.18C17.53 11.18 17.87 11.52 17.87 11.93V18.15ZM17.87 8.77C17.87 9.18 17.53 9.52 17.12 9.52C16.71 9.52 16.37 9.18 16.37 8.77V7.8C13.82 10.42 10.63 12.27 7.06 13.16C7 13.18 6.94 13.18 6.88 13.18C6.54 13.18 6.24 12.95 6.15 12.61C6.05 12.21 6.29 11.8 6.7 11.7C10.07 10.86 13.07 9.09 15.45 6.59H14.2C13.79 6.59 13.45 6.25 13.45 5.84C13.45 5.43 13.79 5.09 14.2 5.09H17.13C17.17 5.09 17.2 5.11 17.24 5.11C17.29 5.12 17.34 5.12 17.39 5.14C17.44 5.16 17.48 5.19 17.53 5.22C17.56 5.24 17.59 5.25 17.62 5.27C17.63 5.28 17.63 5.29 17.64 5.29C17.68 5.33 17.71 5.37 17.74 5.41C17.77 5.45 17.8 5.48 17.81 5.52C17.83 5.56 17.83 5.6 17.84 5.65C17.85 5.7 17.87 5.75 17.87 5.81C17.87 5.82 17.88 5.83 17.88 5.84V8.77H17.87Z" fill="currentColor"/>
                    </svg>
                </div>
                <p>Benefits</p>
            </div>
        </a>
    </li>
</ul>
</nav>`;