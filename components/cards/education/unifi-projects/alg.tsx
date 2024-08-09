import { PythonChip } from '@/components/chips'
import Project from '@/components/project'

export default function Alg() {
  return (
    <Project
      course='Algorithms and Data Structures'
      project='Binary Search Trees and Sorting Algorithms'
      description='This project, developed for the laboratory examination in algorithms and data structures, includes a performance and cost comparison of three types of binary trees—Binary Search Tree (BST), Red-Black Tree (RBT), and Adelson-Velsky and Landis Tree (AVL)—using Python tests, and a comparative study of Quick Sort and Insertion Sort algorithms conducted in Jupyter Notebook.'
      skills={<PythonChip />}
    />
  )
}
