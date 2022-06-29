let blogList = document.querySelector('.blog-container');

let date = new Date().toLocaleString().slice(0,9);


// blogListData 

let blogListData = [
    {
        image : '../Images/img4.png',
        time : date,
        title : '	Now You Can Have The STUDY Of Your Dreams – Cheaper/Faster Than You Ever Imagined ',
        content : 'Lorem ipsum dolor sit amet consectetur adipisorem ipsum dolor sit amet conseicing elit. Rem, non natus necessitatibus quasi nulla error esse nesciunt sunt distinctio fugiat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, non natus necessitatibus quasi nulla error esse nesciunt sunt distinctio fugiat.   '
    },
    {
        image : '../Images/img5.png',
        time : date,
        title : 'Flip the Script: An Intriguing New Approach to the Same Old Football',
        content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, non natus necessitatibus quasi nulla error esse nesciunt sunt distinctio fugiat.   '
    },
    {
        image : '../Images/img6.png',
        time : date,
        title : 'Now You Can Have The GAMING Of Your Dreams – Cheaper/Faster Than You Ever Imagined ',
        content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolororem ipsum dolor sit amet conse sit amet conse Rem, non natus necessitatibus quasi nulla error esse nesciunt sunt distinctio fugiat.   '
    },
    {
        image : '../Images/img7.png',
        time : date,
        title : '	3 Easy Ways To Make TECHNOLOGY Faster ',
        content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, non natus necessitatibus quasi nulla error esse nesciunt sunt distinctio fugiat.   '
    },
    {
        image : '../Images/img8.png',
        time : date,
        title : 'Secrets To Getting IDEAS To Complete Tasks Quickly And Efficiently ',
        content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, non natus necessorem ipsum dolor sit amet conseitatibus quasi nulla error esse nesciunt sunt distinctio fugiat. lorem   '
    },
    {
        image : '../Images/img6.png',
        time : date,
        title : 'What Can You Do To Save Your GAMING From Destruction By Social Media?        ',
        content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, non natus necessitatibus quasi nulla error esse nesciunt sunt distinctio fugiat.   '
    },
]


// function to sow blog list data 

let showBlogListData = () => {
    return blogList.innerHTML = blogListData.map((elem)=>{
        let {image,time, title, content} = elem;
        return (
            `
            <div class="blog-section">
            <div class="blog-img">
                <img src="${image}" alt="img">
            </div>
            <div class="blog-time-and-date">
                ⏱️${time}
            </div>
            <div class="blog-title">
               <a href="#">${title} </a>
            </div>
            <div class="blog-content">
                <p>${content.slice(0,150) + "....."}</p>
            </div>
            <div class="blog-btn">
                <a href="#">read more</a>
            </div>
        </div>
            `
        )
    }).join('');
}

showBlogListData();