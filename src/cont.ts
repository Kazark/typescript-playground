export type T<R,A> = {
    run : (_ : (_ : A) => R) => R
}

export function pure<R,A>(x : A) : T<R,A> {
    return { run : k => k(x) };
}

export function map<R,A,B>(x : T<R,A>, f : (_ : A) => B) : T<R,B> {
    return { run : k => x.run(y => k(f(y))) };
}

export function join<R,A>(x : T<R,T<R,A>>) : T<R,A> {
    return { run : k => x.run(y => y.run(k)) };
}

export function bind<R,A,B>(x : T<R,A>, f : (_ : A) => T<R,B>) : T<R,B> {
    return join(map(x, f));
}
