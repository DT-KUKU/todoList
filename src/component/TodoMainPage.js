import { useFetchCustomHook } from "../hook/useFetchCustomHook";
import Footer from "./Footer";
import Header from "./Header";
import TodoInputComponent from "./TodoInputComponent";
import TodoShowComponent from "./TodoShowComponent";
import { patchHeader, deleteHeader } from "../headers/requestHeaders";
const TodoMainPage = () => {
  const [todoList, loading, error, setReloadData] = useFetchCustomHook();
  // 추후에 fetch 모듈화

  // 즐겨찾기 선택 핸들러
  const favoriteChangeHandler = async (importance, id) => {
    try {
      await fetch(
        `http://localhost:3001/todo/${id}`,
        patchHeader({ importance: !importance })
      );
      setReloadData((prev) => !prev);
    } catch (e) {
      console.error(e);
    }
  };
  // 삭제 핸들러
  const deleteHandler = async (id) => {
    try {
      await fetch(`http://localhost:3001/todo/${id}`, deleteHeader());
      setReloadData((prev) => !prev);
    } catch (e) {
      console.error(e);
    }
  };
  // 할일 완료여부 수정 핸들러
  const checkHandler = async (check, id) => {
    try {
      await fetch(
        `http://localhost:3001/todo/${id}`,
        patchHeader({ check: !check })
      );
      setReloadData((prev) => !prev);
    } catch (e) {
      console.error(e);
    }
  };
  // 수정 핸들러
  const changeTodoHandler = async (data, id) => {
    try {
      await fetch(`http://localhost:3001/todo/${id}`, patchHeader(...data));
      setReloadData((prev) => !prev);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="todo">
      <div className="todo__container">
        {/* Header Section */}
        <Header />
        {/* Input Section */}
        <TodoInputComponent setReloadData={setReloadData} />
        {/* Todo List Section */}
        {error && <div>{error}</div>}
        {loading ? (
          <TodoShowComponent
            todoList={todoList}
            favoriteChangeHandler={favoriteChangeHandler}
            deleteHandler={deleteHandler}
            checkHandler={checkHandler}
          />
        ) : (
          <div>loading</div>
        )}
        {/* Footer Section */}
        <Footer />
      </div>
    </main>
  );
};

export default TodoMainPage;
