type Props ={
    type: 'loading' | 'error';
    message: string;
}

export function Status({ type, message }: Props) { 
    const base = "text-center text-lg p-4 rounded-xl shadow-md w-full max-w-md m-12";
    const color = {
      loading: "bg-yellow-100 text-yellow-800",
      error: "bg-red-100 text-red-800",
    };
  
    return <div className={`${base} ${color[type]}`}>{message}</div>;
}