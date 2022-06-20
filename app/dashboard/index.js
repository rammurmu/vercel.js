import ClientComponent from "./ClientComponent.js";
import ServerComponent from "./ServerComponent.js";

export default function ServerComponentPage() {
  return (
    <>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </>
  );
}
