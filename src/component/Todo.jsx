import { useState } from 'react';

const Todo = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [isedit, setIsEdit] = useState(null);

  const addTodo = () => {
    setData([...data, input]);
    setInput('');
  };

  const deleteTodo = (id) => {
    const updatedList = data.filter((val, i) => {
      return id !== i;
    });
    setData(updatedList);
  };

  const editData = (id) => {
    const newEdit = data.find((val, index) => {
      return index === id;
    });
    setInput(newEdit);
    setToggle(!toggle);
    setIsEdit(id);
  };

  const updateTodo = () => {
    if (input && !toggle) {
      setData(
        data.map((val, index) => {
          if (index === isedit) {
            return input;
          }
          return val;
        })
      );
    }
    setToggle(true);
    setInput('');
  };

  console.log(data);

  return (
    <div className="min-h-screen bg-blue-400 flex justify-center items-center">
      <div className="w-[530px] h-[400px] flex  rounded-lg  justify-center pt-5 p-2 shadow-xl bg-green-300  ">
        <div className="w-full text-center">
          <input
            className="px-2 py-2 w-[400px] outline-none"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Task Here"
          />
          {toggle ? (
            <button
              onClick={addTodo}
              className="bg-green-500 px-5 py-2 
        rounded-md text-white text-[17px] font-semibold border-none"
            >
              Add
            </button>
          ) : (
            <button
              onClick={updateTodo}
              className="bg-blue-500 px-5 py-2 
        rounded-md text-white text-[17px] font-semibold border-none"
            >
              Update
            </button>
          )}
          <h2 className="text-center text-3xl font-semibold my-3">
            All Task Here{' '}
          </h2>
          {data.map((val, index) => (
            <div
              key={index}
              className="flex flex justify-between items-start py-1"
            >
              <p className="text-start capitalize font-semibold ml-[30px] ">
                {' '}
                {val}{' '}
              </p>
              {/* for buttons */}
              <div>
                <button
                  onClick={() => editData(index)}
                  className="bg-blue-600 text-white px-4 py-2 border-none rounded-md hover:bg-blue-500 mx-2 "
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(index)}
                  className="bg-red-600 text-white px-4 py-2 border-none rounded-md hover:bg-red-500  "
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
