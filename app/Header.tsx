import { Heading } from "@digdir/designsystemet-react";
import { CogFillIcon } from "@navikt/aksel-icons";

const Header = () => {
  return (
    <header className="border-b border-border-default">
      <div className="flex items-center gap-4 container mx-auto py-4">
        <CogFillIcon className="h-8 w-8 text-text-subtle" aria-hidden="true" />
        <Heading className="text-text-subtle" level={1}>
          Design System Demo
        </Heading>
      </div>
    </header>
  );
};

export default Header;
