import {
  Breadcrumbs,
  BreadcrumbsItem,
  BreadcrumbsLink,
  BreadcrumbsList,
  Heading,
  Paragraph,
} from "@digdir/designsystemet-react";
import { Suspense } from "react";
import { getTabContent } from "@/mock/server";
import DemoTabs from "./DemoTabs";

export default async function Home() {
  const tabContent = await getTabContent();
  return (
    <>
      <div className="container mx-auto my-12">
        <Breadcrumbs aria-label="Du er her:">
          <BreadcrumbsLink href="#" aria-label="Tilbake til Nivå 1">
            Nivå 1
          </BreadcrumbsLink>
          <BreadcrumbsList>
            <BreadcrumbsItem>
              <BreadcrumbsLink href="#">Nivå 1</BreadcrumbsLink>
            </BreadcrumbsItem>
            <BreadcrumbsItem>
              <BreadcrumbsLink href="#">Nivå 2</BreadcrumbsLink>
            </BreadcrumbsItem>
          </BreadcrumbsList>
        </Breadcrumbs>
      </div>
      <section className="bg-background-tinted">
        <div className="container mx-auto my-12">
          <div className="prose mb-6">
            <Heading level={1} data-size="xl" className="font-serif !mb-4">
              Tab SSR problem demo
            </Heading>
            <Paragraph>
              Demo av SSR-problematikk med tabs. Innholdet hentes asynkront fra en mock-server med
              forsinkelse for å simulere en reell API-forespørsel.
            </Paragraph>
          </div>
          <Heading level={2} data-size="sm" className="!mb-4">
            Det er 2 separate problemer
          </Heading>
          <div className="prose">
            <ol>
              <li>
                Tabpanel-innhold rendres initielt under hverandre før det flyttes til riktig tab.
                Synlig ved at bildet fra "Timeplan" dukker opp under "Om"-innholdet.
              </li>
              <li>
                Ved lasting med en annen tab valgt (f.eks. <code>?tab=timetable</code>) oppstår et
                visuelt hopp. "Om"-tabben blir markert som aktiv før riktig default verdi (f.eks.
                "Timeplan") blir satt til parameteret fra url-en.
              </li>
            </ol>
          </div>
        </div>
      </section>
      <div className="container mx-auto py-5">
        <Suspense>
          <DemoTabs
            about={<div className="prose" dangerouslySetInnerHTML={{ __html: tabContent.about }} />}
            timetable={
              <div className="prose" dangerouslySetInnerHTML={{ __html: tabContent.timetable }} />
            }
            exam={<div className="prose" dangerouslySetInnerHTML={{ __html: tabContent.exam }} />}
          ></DemoTabs>
        </Suspense>
      </div>
    </>
  );
}
