import './Index.css';
import Button from './Button';

function TodoApp() {
  const contents = [
    {
      id: 1,
      title: "Membuat Komponen",
      completed: true
    },
    {
      id: 2,
      title: "Unit Testing",
      completed: false
    },
    {
      id: 3,
      title: "Setup Development Environment",
      completed: true
    },
    {
      id: 4,
      title: "Deploy ke server",
      completed: false
    }  
  ];


  return (
    <div className="TodoApp">
      <h2>To do App</h2><hr/>
      <Button contents={contents}/>
    </div>
  );
}

export default TodoApp;
