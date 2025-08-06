import React from 'react';
import MoorkLayout from '@/layout/MoorkLayout';
import { getServiceBySlug } from '@/data/services';
import Link from 'next/link';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = await getServiceBySlug(slug);

  if (!service) {
    return (
      <MoorkLayout>
        <div className="mil-banner-space" />
        <section className="mil-p-200-100">
          <div className="container">
            <h2 className="text-3xl font-bold mb-4">404 Not Found</h2>
            <p className="text-gray-500">
              We couldn&apos;t find the service you&apos;re looking for.
            </p>
          </div>
        </section>
      </MoorkLayout>
    );
  }

  const Icon = service.icon;

  return (
    <MoorkLayout>
      <section className="mil-p-200-100">
        <div className="container">
          <ul className="mil-breadcrumbs mil-dark mil-mb-30 mil-up">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href={`/services/${slug}`}>{service.title}</Link>
            </li>
          </ul>

          <div className="mb-5 mil-up">
            <h1 className="text-4xl font-bold mb-4 flex items-center gap-4">
              <Icon size={60} className="text-primary" /> {service.title}
            </h1>

            <p
              className="text-lg text-gray-600"
              dangerouslySetInnerHTML={{
                __html: service.detailDescription.replace(/\n/g, '<br />'),
              }}
            />
          </div>

          {service.products?.length > 0 && (
            <section className="mb-16 mil-up">
              <h2 className="text-2xl font-semibold mb-6 text-primary my-5">
                Products
              </h2>
              <div className="row justify-content-center align-items-end">
                {service.products.map((product, idx) => (
                  <div key={idx} className="col-md-4 mil-mb-50">
                    <div className="mil-blog-card mil-up">
                      <div className="mil-cover-frame">
                        <div className="mil-hover-frame mil-up">
                          <img
                            loading="lazy"
                            src={product.image}
                            alt={product.title}
                            data-value-1={1}
                            data-value-2="1.1"
                            className="mil-scale-img"
                          />
                        </div>
                      </div>
                      <div className="mil-descr mil-up">
                        <h5 className="mil-mb-10">{product.title}</h5>
                        <p className="mil-text-16">{product.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {service.services?.length > 0 && (
            <section className="mil-up">
              <h2 className="text-2xl font-semibold mb-6 text-primary my-5">
                Services
              </h2>

              <div className="row justify-content-center align-items-end">
                {service.services.map((srv, idx) => (
                  <div key={idx} className="col-md-4 mil-mb-50">
                    <div className="mil-blog-card mil-up">
                      <div className="mil-cover-frame">
                        <div className="mil-hover-frame mil-up">
                          <img
                            loading="lazy"
                            src={srv.image}
                            alt={srv.title}
                            data-value-1={1}
                            data-value-2="1.1"
                            className="mil-scale-img"
                          />
                        </div>
                      </div>
                      <div className="mil-descr mil-up">
                        <h5 className="mil-mb-10">{srv.title}</h5>
                        <p className="mil-text-16">{srv.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </MoorkLayout>
  );
}
