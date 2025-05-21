import { PageContentProps } from "../../types/pagecontent";

const PageBanner = ({ pageContent }: PageContentProps) => {
  return (
    <section className="page_banner">
      <div className="container mx-auto">
        <div className="page_banner_content">
          <h2 className="text-3xl text-white font-bold text-center mb-3">
            {pageContent.title}
          </h2>
          <p className="text-center text-white/60 mb-6 max-w-2xl mx-auto">
            {pageContent.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
