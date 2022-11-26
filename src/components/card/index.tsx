import { DataResult } from "../../types"
import style from "./style.module.scss"

type CardProps = {
  item: DataResult
}

export const Card = ({ item }: CardProps, key: string) => {
  return (
    <ul className={style.cardContainer} key={item.id}>
      <li className={style.userTodo}>{item.user.name}</li>
      <li className={style.completedTodo}>
        {item.completed ? "Completed" : "In process"}
      </li>
      <li className={style.titleTodo}>{item.title}</li>
    </ul>
  )
}
