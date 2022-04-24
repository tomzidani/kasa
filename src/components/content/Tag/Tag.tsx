interface TagInterface {
  children: string
}

const Tag = ({ children }: TagInterface) => {
  return <span className="tag">{children}</span>
}

export default Tag
