export default function Item({ name, quantity, category}) {
    return (
        <div className=  "bg-zinc-400 w-full max-w-xs m-2 p-2 rounded-md">
            <h3 className="text-xs font-bold tracking-wider">{name}</h3>
            <p className="text-xs"> Buy {quantity} in {category} </p>
        </div>
    );
}