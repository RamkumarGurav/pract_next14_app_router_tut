export default function PageName() {
  return (
    <div className="w-full space-y-4">
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          Normal boxes in a Container
        </h1>
        <div className=" bg-purple-400 ">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          Normal boxes in a default flex Container
        </h1>
        <div className="flex bg-purple-400">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          Normal boxes in a Container with 200px height
        </h1>
        <div className=" bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          Normal boxes in a default flex Container with 200px height
        </h1>
        <div className="flex bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          Normal boxes in a default flex Container with justify-stretch
        </h1>
        <div className="flex justify-stretch bg-purple-400">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-stretch bg-purple-400 h-[200px]
        </h1>
        <div className="flex justify-stretch bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-start(default) bg-purple-400 h-[200px]
        </h1>
        <div className="flex justify-start bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-start(Default) items-stretch(Default) bg-purple-400
          h-[200px]
        </h1>
        <div className="flex justify-start items-stretch bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-start(Defualt) items-start bg-purple-400 h-[200px]
        </h1>
        <div className="flex justify-start items-start bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-start(Defualt) items-center bg-purple-400 h-[200px]
        </h1>
        <div className="flex justify-start items-center bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-start(Defualt) items-end bg-purple-400 h-[200px]
        </h1>
        <div className="flex justify-start items-end bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-center items-start bg-purple-400 h-[200px]
        </h1>
        <div className="flex justify-center items-start bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-center items-center bg-purple-400 h-[200px]
        </h1>
        <div className="flex justify-center items-center bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-center items-end bg-purple-400 h-[200px]
        </h1>
        <div className="flex justify-center items-end bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-center items-stretch bg-purple-400 h-[200px]
        </h1>
        <div className="flex justify-center items-stretch bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-end items-start bg-purple-400 h-[200px]
        </h1>
        <div className="flex justify-end items-start bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-end items-center bg-purple-400 h-[200px]
        </h1>
        <div className="flex justify-end items-center bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-end items-end bg-purple-400 h-[200px]
        </h1>
        <div className="flex justify-end items-end bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-end items-stretch bg-purple-400 h-[200px]
        </h1>
        <div className="flex justify-end items-stretch bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-between items-start bg-purple-400 h-[200px]
        </h1>
        <div className="flex justify-between items-start bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-between items-center bg-purple-400 h-[200px]
        </h1>
        <div className="flex justify-between items-center bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-between items-end bg-purple-400 h-[200px]
        </h1>
        <div className="flex justify-between items-end bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-between items-stretch bg-purple-400 h-[200px]
        </h1>
        <div className="flex justify-between items-stretch bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-end items-start bg-purple-400 h-[200px]
        </h1>
        <div className="flex justify-end items-start bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-start bg-purple-400 h-[200px]
        </h1>
        <div className="flex justify-start  bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-start items-stretch bg-purple-400 h-[200px]
        </h1>
        <div className="flex justify-start items-stretch bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-center items-stretch bg-purple-400 h-[200px]
        </h1>
        <div className="flex justify-center items-stretch bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex justify-end items-stretch bg-purple-400 h-[200px]
        </h1>
        <div className="flex justify-end items-stretch bg-purple-400 h-[200px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          Normal boxes in a default flex Container with both child box&apos;s
          width as 100%
        </h1>
        <div className="flex bg-purple-400">
          <div className="bg-red-300 p-4 w-full">Box1</div>
          <div className="bg-blue-300 p-4 w-full">Box2</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          Normal boxes in a default flex Container with both child box&apos;s
          width as 50%
        </h1>
        <div className="flex bg-purple-400">
          <div className="bg-red-300 p-4 w-[50%]">Box1</div>
          <div className="bg-blue-300 p-4 w-[50%]">Box2</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          Normal boxes in a default flex Container with both child box&apos;s
          flex basis as 50%
        </h1>
        <div className="flex bg-purple-400">
          <div className="bg-red-300 p-4 basis-[50%]">Box1</div>
          <div className="bg-blue-300 p-4  basis-[50%]">Box2</div>
        </div>
      </section>

      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          Normal boxes in a default flex Container with width as box1=20% and
          box2=100%
        </h1>
        <h1 className="text-center text-lg font-semibold">(Not Recommended)</h1>
        <div className="flex bg-purple-400 w-full">
          <div className="bg-red-300 p-4 w-[20%]">Box1</div>
          <div className="bg-blue-300 p-4 w-full">Box2</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          Normal boxes in a default flex Container with width as box1=20% and
          box2=80%
        </h1>
        <div className="flex bg-purple-400 w-full">
          <div className="bg-red-300 p-4 w-[20%]">Box1</div>
          <div className="bg-blue-300 p-4 w-[80%]">Box2</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          Normal boxes in a default flex Container with width as box1 flex
          basis=20% and box2 flex basis = 80%
        </h1>
        <div className="flex bg-purple-400 w-full">
          <div className="bg-red-300 p-4 basis-[20%]">Box1</div>
          <div className="bg-blue-300 p-4 basis-[80%]">Box2</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          Normal boxes in a default flex Container with width as box1 flex
          width=20% and box2 flex grow 1{" "}
        </h1>
        <div className="flex bg-purple-400 w-full">
          <div className="bg-red-300 p-4 w-[20%]">Box1</div>
          <div className="bg-blue-300 p-4 grow">Box2</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          Normal boxes in a default flex Container with width as box1 flex
          basis=20% and box2 flex grow 1{" "}
        </h1>
        <div className="flex bg-purple-400 w-full">
          <div className="bg-red-300 p-4 basis-[20%]">Box1</div>
          <div className="bg-blue-300 p-4 grow">Box2</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          Normal boxes in a default flex Container with width as box1
          width=200px and box2 flex grow 1{" "}
        </h1>
        <div className="flex bg-purple-400 w-full">
          <div className="bg-red-300 p-4 w-[200px]">Box1</div>
          <div className="bg-blue-300 p-4 grow">Box2</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          Normal boxes in a default flex Container with width as box1
          width=200px and box2 flex basis 100%
        </h1>
        <h1 className="text-center text-lg font-semibold">
          (NOt Recommended3)
        </h1>
        <div className="flex bg-purple-400 w-full">
          <div className="bg-red-300 p-4 w-[200px]">Box1</div>
          <div className="bg-blue-300 p-4 basis-[100%]">Box2</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          Parent= flex w-full
        </h1>
        <h1 className="text-center text-lg font-semibold">
          Children= min-w-[100px] grow
        </h1>
        <h1 className="text-center text-lg font-semibold"></h1>
        <div className="flex bg-purple-400 w-full">
          <div className="bg-red-300 p-4 min-w-[100px] grow">Box1</div>
          <div className="bg-blue-300 p-4 min-w-[100px] grow">Box2</div>
          <div className="bg-green-300 p-4 min-w-[100px] grow">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          Parent= flex w-full
        </h1>
        <h1 className="text-center text-lg font-semibold">
          Children= w-[100px] grow
        </h1>
        <h1 className="text-center text-lg font-semibold"></h1>
        <div className="flex bg-purple-400 w-full">
          <div className="bg-red-300 p-4 w-[100px] grow">Box1</div>
          <div className="bg-blue-300 p-4 w-[100px] grow">Box2</div>
          <div className="bg-green-300 p-4 w-[100px] grow">Box3</div>
        </div>
      </section>

      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          Parent= flex w-full
        </h1>
        <h1 className="text-center text-lg font-semibold">
          Children= max-w-[100px] grow
        </h1>
        <h1 className="text-center text-lg font-semibold">
          here grow doesnt work due to max width
        </h1>
        <h1 className="text-center text-lg font-semibold"></h1>
        <div className="flex bg-purple-400 w-full">
          <div className="bg-red-300 p-4 max-w-[100px] grow">Box1</div>
          <div className="bg-blue-300 p-4 max-w-[100px] grow">Box2</div>
          <div className="bg-green-300 p-4 max-w-[100px] grow">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          Parent= flex w-full
        </h1>
        <h1 className="text-center text-lg font-semibold">
          Children= basis-[300px]
        </h1>

        <h1 className="text-center text-lg font-semibold"></h1>
        <div className="flex bg-purple-400 w-full">
          <div className="bg-red-300 p-4 basis-[300px]">Box1</div>
          <div className="bg-blue-300 p-4 basis-[300px]">Box2</div>
          <div className="bg-green-300 p-4 basis-[300px]">Box3</div>
        </div>
      </section>
      <h1 className="bg-black text-white text-center text-xl  ">
        Flex direction : column
      </h1>

      <section className="border-[1px] border-gray-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex flex-col bg-purple-400
        </h1>
        <div className="flex flex-col bg-purple-400">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex flex-col bg-purple-400 h-[300px]
        </h1>
        <div className="flex flex-col bg-purple-400 h-[300px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex flex-col items-stretch bg-purple-400 h-[300px]
        </h1>
        <div className="flex flex-col items-stretch bg-purple-400 h-[300px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex flex-col items-start bg-purple-400 h-[300px]
        </h1>
        <div className="flex flex-col items-start bg-purple-400 h-[300px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex flex-col items-start justify-start bg-purple-400 h-[300px]
        </h1>
        <div className="flex flex-col items-start justify-start bg-purple-400 h-[300px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex flex-col items-start justify-center bg-purple-400 h-[300px]
        </h1>
        <div className="flex flex-col items-start justify-center bg-purple-400 h-[300px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex flex-col items-start justify-end bg-purple-400 h-[300px]
        </h1>
        <div className="flex flex-col items-start justify-end bg-purple-400 h-[300px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex flex-col items-start justify-stretch bg-purple-400 h-[300px]
        </h1>
        <div className="flex flex-col items-start justify-stretch bg-purple-400 h-[300px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex flex-col items-start justify-between bg-purple-400 h-[300px]
        </h1>
        <div className="flex flex-col items-start justify-between bg-purple-400 h-[300px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex flex-col items-start justify-evenly bg-purple-400 h-[300px]
        </h1>
        <div className="flex flex-col items-start justify-evenly bg-purple-400 h-[300px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex flex-col items-start justify-around bg-purple-400 h-[300px]
        </h1>
        <div className="flex flex-col items-start justify-around bg-purple-400 h-[300px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex flex-col items-stretch justify-start bg-purple-400 h-[300px]
        </h1>
        <div className="flex flex-col items-stretch justify-start bg-purple-400 h-[300px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex flex-col items-stretch justify-center bg-purple-400 h-[300px]
        </h1>
        <div className="flex flex-col items-stretch justify-center bg-purple-400 h-[300px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex flex-col items-stretch justify-end bg-purple-400 h-[300px]
        </h1>
        <div className="flex flex-col items-stretch justify-end bg-purple-400 h-[300px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
      <section className="border-[1px] border-red-500 ">
        <h1 className="text-center text-lg font-semibold">
          flex flex-col items-stretch justify-between bg-purple-400 h-[300px]
        </h1>
        <div className="flex flex-col items-stretch justify-between bg-purple-400 h-[300px]">
          <div className="bg-red-300 p-4">Box1</div>

          <div className="bg-blue-300 p-4">Box2</div>
          <div className="bg-green-300 p-4">Box3</div>
        </div>
      </section>
    </div>
  );
}
