import { useEffect,useState } from "react";

export default function resize(){
    const [isMenuModal,setIsMenuModal] = useState(false)
    useEffect(() => {
        function handleResize() {
          if (window.innerWidth > 375) {
            setIsMenuModal(false);
          }
        }
      
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
     return {isMenuModal,setIsMenuModal}
}