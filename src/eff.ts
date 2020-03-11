import * as reader from "./reader"
import * as cont from "./cont"

export type T<R,E,A> = {
    reader : reader.T<E,cont.T<R,A>>
}
