 <View className="Edit_Group">
              <Text className="text-textColor  mb-5">
                Configure your practice
              </Text>
              <View className="practice-box bg-[#1d293b] rounded-lg gap-3 pt-2 ">
                <View className="p-3 header border-b-2 border-cyan-400 flex-row justify-between">
                  <Text className=" text-textColor font-bold ml-2">
                    Warm Up
                  </Text>
                  <Text className="text-textColor mr-3">Edit</Text>
                </View>
                <View className="p-3 flex-row gap-1">
                  <Text className="text-pink-400">1.</Text>
                  <Text className="text-textColor"> Mini Tennis</Text>
                </View>
              </View>
            </View>
            <View className="">
              <Text className="text-textColor">
                Challenge: Make less than 10 net error
              </Text>
            </View>
            <View className="practice-box bg-[#1d293b] rounded-lg gap-3 pt-2 ">
              <View className="p-3 header border-b-2 border-cyan-400 flex-row justify-between">
                <Text className=" text-textColor font-bold ml-2">
                  Main Drills
                </Text>
                <Text className="text-textColor mr-3">Edit</Text>
              </View>
              <View className="p-3 flex-row gap-1">
                <Text className="text-pink-400">1.</Text>
                <Text className="text-textColor"> Mini Tennis</Text>
              </View>
            </View>
            <View className="">
              <Text className="text-textColor">
                Challenge: Make less than 10 net error
              </Text>
            </View>
            <View className="practice-box bg-[#1d293b] rounded-lg gap-3 pt-2 ">
              <View className="p-3 header border-b-2 border-cyan-400 flex-row justify-between">
                <Text className=" text-textColor font-bold ml-2">
                 Fitness
                </Text>
                <Text className="text-textColor mr-3">Edit</Text>
              </View>
              <View className="p-3 flex-row gap-1">
                <Text className="text-pink-400">1.</Text>
                <Text className="text-textColor"> Mini Tennis</Text>
              </View>
            </View>
          </View>



<!-- this is challenge box -->
      {/* <View className="bg-pink-400 rounded-md gap-3 p-3">
              <View className="flex-row justify-between">
                <Text className="text-lg font-semibold">Daily Challenge</Text>
                <Text>Check</Text>
              </View>
              <Text>Make less than 10 net errors</Text>
            </View> */}
            {/* <View>
              <Text className="text-textColor">
                Plan Your Practice, complete skill challenges, imrpove your
                skills
              </Text>
            </View> */}


              {/* <Text className="text-start text-textColor text-3xl font-medium p-2">
              Today's Training
            </Text>
            <View className="slide-group flex-row gap-2">
              <View className="slide bg-pink-500 w-[33%] h-[120px] rounded-[18px]">
                <Text className="text-center pt-2">Play Patterns</Text>
              </View>
              <View className="slide bg-white w-[33%] h-[120px] rounded-[18px]">
                <Text className="text-center pt-2">Backhand</Text>
              </View>
              <View className="slide bg-blue-400 w-[33%] h-[120px] rounded-[18px]">
                <Text className="text-center pt-2">Serve</Text>
              </View>
            </View>
          </View>
          <View className="main_content">
            <View className="text-group border-green-500 border">
              <Text className="text-textColor">
                Slice then look for a Forehand
              </Text>
              <Text className="text-textColor">
                The idea is to hit a good slice then opponent pick it up and the
                return ball in your strike range
              </Text>
            </View> */}



  no task view:

    <View className="NO justify-center flex items-center gap-2 p-16 mb-3 relative border-dashed border border-gray-400">
              <Text className="text-gray-600 mt-3 font-medium text-[19px] text-center w-[200px] mb-2 transition ease-in duration-500">
                Add {tabName} Below

              </Text>
              <View className="tasks-view ">
                <Text className="">High knee side to side</Text>
              </View>
            </View>




indicator


    <View
            className="flex-row gap-2  justify-center items-center "
            style={{ transform: [{ translateY: -10 }] }}
          >
            <View
              className="h-[4px]  flex-row rounded-lg
                     bg-blue-400 w-[10px] transition duration-250 ease-in delay-100"
            />
            <View
              className="h-[4px]  flex-row rounded-lg
                     bg-white w-[10px] transition duration-250 ease-in delay-100"
            />
            <View
              className="h-[4px]  flex-row rounded-lg
                     bg-blue-400 w-[10px] transition duration-250 ease-in delay-100"
            />
            <View
              className="h-[4px]  flex-row rounded-lg
                     bg-blue-400 w-[10px] transition duration-250 ease-in delay-100"
            />
            <View
              className="h-[4px]  flex-row rounded-lg
                     bg-blue-400 w-[10px] transition duration-250 ease-in delay-100"
            />
            <View
              className="h-[4px]  flex-row rounded-lg
                     bg-blue-400 w-[10px] transition duration-250 ease-in delay-100"
            />
          </View>














          IDK WHAT THIS IS


            {/* {drills[tabName]?.length === 0 ? (
              <View className="NO justify-center flex items-center gap-2 p-16 mb-3 relative border-dashed border border-gray-400">
                <Text className="text-gray-600 mt-3 font-medium text-[19px] text-center w-[200px] mb-2 transition ease-in duration-500">
                  Add {tabName} Below
                </Text>
              </View>
            ) : (
              <View className="NO   pl-8 py-5 mb-3 relative border-dashed border border-gray-400 pr-6 gap-3">
                {drills[tabName].map((items: any, index: any) => (
                  <View className="tasks-view  p-3 pl-6 rounded-sm flex-row ">
                    <Text key={index} className="text-fuchsia-300 font-bold">
                      {index + 1}
                    </Text>
                    <Text className="text-white">{items.name}</Text>
                    <Text></Text>
                  </View>
                ))}
              </View>
            )}




            // {
//   "image": "./assets/images/adaptive-icon.png",
//   "imageWidth": 200,
//   "resizeMode": "contain",
//   "backgroundColor": "#38bdf8"
// }




  {
      coach: "Coach Jakub",
      totalWeeks: 3,
      title: "Speed & Agility",
      description: "Training to improve footwork and speed",
      tags: ["Plyometric", "Footwork", "Endurance", "Agility"],
    },
    {
      coach: "Coach Raith",
      totalWeeks: 3,
      title: "Single Sprinkle Strategies",
      description: "Training focus on the best single strategies",
      tags: ["Focus", "Mindset", "Mental Toughness"],
    },
    {
      coach: "Coach Mark",
      totalWeeks: 3,
      title: "Double Trouble Strategies",
      description: "Training for a strong serve and quick volleys",
      tags: ["Serve", "Volley", "Footwork", "Tactics"],
    },