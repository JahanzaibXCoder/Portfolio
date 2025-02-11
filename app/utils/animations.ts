import type { ParticleProps } from "../components/ParticleSystem"

const animations: Record<string, ParticleProps> = {
  home: {
    shape: "rocket",
    mouseFollow: true,
    scrollDisperse: true,
  },
  projects: {
    shape: "code",
    mouseFollow: true,
    scrollDisperse: true,
  },
  blog: {
    shape: "brain",
    mouseFollow: true,
    scrollDisperse: true,
  },
  contact: {
    shape: "envelope",
    mouseFollow: true,
    scrollDisperse: true,
  },
}

export const getAnimationForPage = (page: string): ParticleProps => {
  return animations[page] || animations.home
}

