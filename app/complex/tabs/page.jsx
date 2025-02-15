
import TabsComponent from "@/app/components/tabs/TabsComponent";
import React from "react";

const TabsPage = () => {
  return (
    <div className="bg-white rounded-lg mx-4 p-4">
      <h1>Tabs page</h1>
      <br />

      {/* Tabs component */}
      <TabsComponent items={items} />
    </div>
  );
};

export default TabsPage;

const items = [
  {
    title: "Tab 1",
    content: (
      <div className="border-2 border-blue-400 rounded-lg p-4">
        <h1 className="text-3xl text-blue-600">Title Test 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          aut, ab provident earum facere harum ea neque excepturi dolor fugit
          dolorum at accusantium exercitationem eos necessitatibus architecto
          fugiat autem voluptatum officiis blanditiis saepe assumenda. Atque
          quia odit consequuntur incidunt at! Aliquam ad facilis numquam
          veritatis.
        </p>
      </div>
    ),
  },
  {
    title: "Tab 2",
    content: (
      <div className="border-2 border-blue-400 rounded-lg p-4">
        <h1 className="text-3xl text-blue-600">Title Test 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          aut, ab provident earum facere harum ea neque excepturi dolor fugit
          dolorum at accusantium exercitationem eos necessitatibus architecto
          fugiat autem voluptatum officiis blanditiis saepe assumenda. Atque
          quia odit consequuntur incidunt at! Aliquam ad facilis numquam
          veritatis.
        </p>
      </div>
    ),
  },
  {
    title: "Tab 3",
    content: (
      <div className="border-2 border-blue-400 rounded-lg p-4">
        <h1 className="text-3xl text-blue-600">Title Test 3</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          aut, ab provident earum facere harum ea neque excepturi dolor fugit
          dolorum at accusantium exercitationem eos necessitatibus architecto
          fugiat autem voluptatum officiis blanditiis saepe assumenda. Atque
          quia odit consequuntur incidunt at! Aliquam ad facilis numquam
          veritatis.
        </p>
      </div>
    ),
  },
  {
    title: "Tab 4",
    content: (
      <div className="border-2 border-blue-400 rounded-lg p-4">
        <h1 className="text-3xl text-blue-600">Title Test 4</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          aut, ab provident earum facere harum ea neque excepturi dolor fugit
          dolorum at accusantium exercitationem eos necessitatibus architecto
          fugiat autem voluptatum officiis blanditiis saepe assumenda. Atque
          quia odit consequuntur incidunt at! Aliquam ad facilis numquam
          veritatis.
        </p>
      </div>
    ),
  },
];
