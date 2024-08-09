import { CPlusPlusChip } from '@/components/chips'
import Project from '@/components/project'

export default function Lab() {
  return (
    <Project
      course='Programming Laboratory'
      project='Dragon Slayer'
      description='Roguelike RPG video game developed in C++ as a project for the programming lab exam'
      linkGithub='https://github.com/Malatan/DragonSlayer'
      skills={<CPlusPlusChip />}
    />
  )
}
