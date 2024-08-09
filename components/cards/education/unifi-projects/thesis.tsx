import { AlbumentationsChip, PythonChip, PyTorchChip, YOLOChip } from '@/components/chips'
import Project from '@/components/project'

export default function Thesis() {
  return (
    <Project
      course='Thesis'
      project='Object Detection in thermal images using a combination of augmentation techniques'
      description='Comparison of three models (YOLOv8, YOLOWorld, RT-DETR) from Ultralytics for object detection in thermal images provided by TeledyneFLIR. After fine-tuning, the models were trained on an augmented dataset using Albumentations, identifying the most effective model and augmentation techniques for improving detection accuracy.'
      linkGithub='https://github.com/LeonardoBorsi/YOLO-FLIR'
      skills={
        <>
          <YOLOChip />
          <PyTorchChip />
          <PythonChip />
          <AlbumentationsChip />
        </>
      }
    />
  )
}
