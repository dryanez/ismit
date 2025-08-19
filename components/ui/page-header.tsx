interface PageHeaderProps {
  title: string
  subtitle: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="page-header text-white py-16 pt-24">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wide">{title}</h1>
        <p className="text-xl md:text-2xl font-light mt-4 max-w-3xl mx-auto text-blue-200">{subtitle}</p>
      </div>
    </div>
  )
}

// Adding default export for compatibility
export default PageHeader
