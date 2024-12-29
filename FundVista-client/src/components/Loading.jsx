import {  RotatingLines } from "react-loader-spinner"

const Loading = () => {
      return (
            <div className="flex items-center justify-center h-72 w-full">
                  <RotatingLines
                        visible={true}
                        height="60"
                        width="60"
                        color="#f59118"
                        strokeWidth="5"
                        animationDuration="0.65"
                        ariaLabel="rotating-lines-loading"
                        wrapperStyle={{}}
                  />
            </div>
      )
}

export default Loading