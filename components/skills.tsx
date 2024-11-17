

function Skills({title,className}:{title:string,className:string}) {
  return (
   <div className={`flex h-20 w-20 bg-gradient-to-r from-black to-gray-500 text-white justify-center items-center rounded-md ${className}`}>
      <p>{title}</p>
   </div>
  )
}

export default Skills