window.addEventListener("scroll", function () {

    var previousScrollY = window.scrollY;
    if(previousScrollY > 0)
    {
          const blogNavbar = document.getElementById('header-blog');
          blogNavbar.classList.add('backdrop-blur-md', 'bg-white/30')
          const navbarBlog = document.getElementById('navbar-blog');
          navbarBlog.classList.remove('bg-nab_color')
    }
    else if (previousScrollY === 0)
    {
        const navbarBlog = document.getElementById('navbar-blog');
        navbarBlog.classList.add('bg-nab_color')
    }
  
  });

document.getElementById('home-btn').addEventListener('click', function(){
    window.location.href = 'index.html'
})