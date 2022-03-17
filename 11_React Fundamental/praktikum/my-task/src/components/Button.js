import './Index.css';

function Button(props) {
    const contents = props.contents;
    return (
        <div className='group-btn'>
          {
            contents.map(content =>{
              if(content.completed){
              return <button key={content.id} className="btn" style={{textDecoration:'line-through'}}>{content.title}</button>
              }else{
                return <button key={content.id} className="btn">{content.title}</button>
              }
            })
          }      
       </div>
    );
}

export default Button;
