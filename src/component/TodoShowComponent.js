import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faStar as Star,
  faXmark,
  faCircleCheck as check,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck as unCheck } from "@fortawesome/free-regular-svg-icons";

const TodoShowComponent = ({
  todoList,
  favoriteChangeHandler,
  deleteHandler,
  checkHandler,
}) => {
  return (
    <section className="TodoShow">
      <div className="TodoShow__container">
        <article
          className="TodoShow__list"
          style={{ border: "1px solid grey" }}
        >
          {todoList.length !== 0 ? (
            todoList.map((el) => {
              return (
                <div key={el.id}>
                  {el.check ? (
                    <FontAwesomeIcon
                      icon={check}
                      style={{ cursor: "pointer" }}
                      onClick={() => checkHandler(el.check, el.id)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={unCheck}
                      style={{ cursor: "pointer" }}
                      onClick={() => checkHandler(el.check, el.id)}
                    />
                  )}
                  <span>{el.title}</span>
                  <FontAwesomeIcon icon={faPenToSquare} />
                  <span>
                    {el.importance ? (
                      <FontAwesomeIcon
                        onClick={() =>
                          favoriteChangeHandler(el.importance, el.id)
                        }
                        icon={Star}
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        onClick={() =>
                          favoriteChangeHandler(el.importance, el.id)
                        }
                        icon={faStar}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </span>
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteHandler(el.id)}
                  />
                </div>
              );
            })
          ) : (
            <div>아무 일정이 없어요!</div>
          )}
        </article>
      </div>
    </section>
  );
};

export default TodoShowComponent;
