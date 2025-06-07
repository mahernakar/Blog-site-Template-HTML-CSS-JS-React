import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/4050388/pexels-photo-4050388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Maher</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Magnam quo neque iste soluta tempore esse voluptates ad
            commodi ullam placeat accusamus, quidem accusantium maiores repudiandae,
            atque est, repellat tenetur officiis? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Magnam quo neque iste soluta
            tempore esse voluptates ad commodi ullam placeat accusamus,
            quidem accusantium maiores repudiandae,atque est, repellat tenetur officiis?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Magnam quo neque iste soluta tempore esse voluptates ad
            commodi ullam placeat accusamus, quidem accusantium maiores repudiandae,
            atque est, repellat tenetur officiis? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Magnam quo neque iste soluta
            tempore esse voluptates ad commodi ullam placeat accusamus,
            quidem accusantium maiores repudiandae,atque est, repellat tenetur officiis?
            </p>
        </div>
    </div>
  )
}
