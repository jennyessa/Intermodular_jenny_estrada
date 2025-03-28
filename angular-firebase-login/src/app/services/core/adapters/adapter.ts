// interfaz definen metodos que la clase que implente la interfaz deben tener.
// T devuelve cualquier cosa
// any recibe cualquie cosa.

export interface Adapter<T> {
    adapt(item: any): T;
}