import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Target = (props) => {

  const targetRef = useRef();
  const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf') //creating your own scene

  //using gsap to animate the target

  useGSAP(() => {
    //it takes 2 variables
    gsap.to(targetRef.current.position,{
      y:targetRef.current.position.y + 0.5,
      duration:1.5,
      yoyo:true, //this gives it the yoyo effect -> it goes up and down
      repeat:-1
    })
  })

  //Here Primitive acts as both geometry and material

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI/5, 0 ]} scale={1.5}>
      <primitive object={scene} ref={targetRef} />
    </mesh>
  )
}

export default Target