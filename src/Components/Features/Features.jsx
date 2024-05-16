import { Link } from "react-router-dom"

const Features = ({ cards = [1, 2, 3] }) => {
  return (
    <main className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            cards.map((card) => {
              return (
                <div class="mx-auto flex items-center justify-center gap-10 px-6 py-5">
                  <ul class="border-green-600 hover:border-green-400 hover:bg-green-600 group flex-1 -skew-x-[16deg] transform border">
                    <Link to={`/categories/${card}`} class="m-4 skew-x-[30deg] transform bg-transparent px-20 text-center first-letter:uppercase">
                      <h3 class="block text-lg group-hover:text-white px-16 font-bold">{card || "Example card"}</h3>
                    </Link>
                  </ul>
                </div>
              )
            })
          }
        </div>
      </div>
    </main>
  )
}
export default Features


//   < Link to = {`/categories/${card}`} className = "p-4 md:w-1/3 cursor-pointer" >
//     <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
//       <div className="flex items-center mb-3">
//         <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
//           <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
//             <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
//           </svg>
//         </div>
//         <h2 className="text-gray-900 text-lg title-font font-medium capitalize">{card || "Example card"}s</h2>
//       </div>
//       <div className="flex-grow">
//         <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
//         <a className="mt-3 text-blue-500 inline-flex items-center">Learn More
//           <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
//             <path d="M5 12h14M12 5l7 7-7 7"></path>
//           </svg>
//         </a>
//       </div>
//     </div>
// </Link >



