import HabitsProps from "../../core/porps/habits-props";
import { Habits } from "./style";

export function HabitsComponent(props: HabitsProps) {
    return (
        <Habits>
            <h1>{props.completed}</h1>
        </Habits>
    )
}