"use client";
import { Heading, Tabs, TabsList, TabsPanel, TabsTab } from "@digdir/designsystemet-react";
import { usePathname, useSearchParams } from "next/navigation";

const DEFAULT_TAB = "about";

type DemoTabsProps = {
  about: React.ReactNode;
  timetable: React.ReactNode;
  exam: React.ReactNode;
};

const DemoTabs = ({ about, timetable, exam }: DemoTabsProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab");
  const selectedTab = currentTab ?? DEFAULT_TAB;

  function handleTabChange(newValue: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (newValue === "about") {
      params.delete("tab");
    } else {
      params.set("tab", newValue);
    }

    const query = params.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    window.history.pushState(null, "", url);
  }
  return (
    <Tabs defaultValue={selectedTab} onChange={handleTabChange}>
      <TabsList>
        <TabsTab value="about" aria-selected={`${selectedTab === "about"}`}>
          Om
        </TabsTab>
        <TabsTab value="timetable" aria-selected={`${selectedTab === "timetable"}`}>
          Timeplan
        </TabsTab>
        <TabsTab value="exam" aria-selected={`${selectedTab === "exam"}`}>
          Eksamen
        </TabsTab>
      </TabsList>
      <div className="mt-4">
        <TabsPanel value="about" className="!p-0" hidden={selectedTab !== "about"}>
          <Heading className="!mb-4">Om</Heading>
          {about}
        </TabsPanel>
        <TabsPanel value="timetable" className="!p-0" hidden={selectedTab !== "timetable"}>
          <Heading className="!mb-4">Timeplan</Heading>
          {timetable}
        </TabsPanel>
        <TabsPanel value="exam" className="!p-0" hidden={selectedTab !== "exam"}>
          <Heading className="!mb-4">Eksamen</Heading>
          {exam}
        </TabsPanel>
      </div>
    </Tabs>
  );
};
export default DemoTabs;
