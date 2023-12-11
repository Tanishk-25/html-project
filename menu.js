const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://www.allrecipes.com/thmb/UXv_24LIE376MRgVvZDBJKa856w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/24530-ButtermilkPancakes-II-mfs-4X3-3385-b9e08648074145d18c538731c2be4215.jpg",
      desc: "Cakes",
      
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRInd9dqWxEx5_xsycRYEJnTm8mAnYevF5lgQ&usqp=CAU",
      desc: `Special Thali`,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/c2/29/eb/milo-godzilla.jpg",
      desc: `King Of Shakes`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://imgmedia.lbb.in/media/2021/06/60d2f2456e30431f326897d0_1624437317533.jpg",
      desc: `Break-Fast`,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://static.toiimg.com/thumb/msid-79305376/79305376.jpg?width=500&resizemode=4",
      desc: `Smashed Eggs`,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://hurrythefoodup.com/wp-content/uploads/2015/09/overnight-oats-tropic-thunder-post.jpg",
      desc: `Thunder Shakes For Risk-Takers`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://vishal-raj-1.github.io/Awesome-JavaScript-Projects/assets/Images/foodCourt/item-7.jpeg",
      desc: `Bacon is Everything `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "https://assets.epicurious.com/photos/630386df4eaa77f49a537aa5/1:1/w_2560%2Cc_limit/Brown_Sugar_Bacon_RECIPE_081722_38635.jpg",
      desc: `American Special Lunch`,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQ5XmedIf_r6QGu4vUp0F0jZCImsYHIcpzg&usqp=CAU",
      desc: `Health is Wealth`,
    },
  ];
  
  const sectionCenter = document.querySelector('.section-center');
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  
  
  window.addEventListener('DOMContentLoaded',()=>{
    
    displayMenuItems(menu)
  
  })
  
  filterBtns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter((menuItem)=>{
      if(menuItem.category === category){
        return menuItem;
      }
    });
    if(category ==="all"){
      displayMenuItems(menu)
    }
    else{
      displayMenuItems(menuCategory)
    }
  })
  })
  
  function displayMenuItems(menuItems){
    let displayMenu = menuItems.map((item)=>{
      return `<article class="menu-item">
      <img src="${item.img}" class="photo" alt="${item.title} />
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
  
        </header>
        <p class="item-text">
          ${item.desc}  
        </p>
      </div>
    </article>`
    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
  }