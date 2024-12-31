 <View className="mx-10 gap-5">
          <View className="flex-row justify-between">
            {user ? (
              <Text className="color-textColor text-lg font-medium mt-5">
                <Text style={{ color: "#16bcfe" }}>Welcome</Text>,{" "}
                {user.firstName}!
              </Text>
            ) : (
              <TouchableOpacity onPress={onPress}>
                <Text className="color-[#16bcfe] text-lg font-medium mt-5 ">
                  Log In
                </Text>
              </TouchableOpacity>
            )}
            <SignedIn>
              <TouchableOpacity onPress={handleSignOut}>
                <Text className="text-textColor mt-[20px] font-medium">
                  Sign Out
                </Text>
              </TouchableOpacity>
            </SignedIn>
          </View>
          <View className="mt-3 flex-row gap-5">
            {days.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveIndex(index)}
                className={`w-11 flex items-center p-[4px] h-[58px] justify-center rounded-xl gap-[3px] ${
                  activeIndex === index ? "bg-[#16bcfe]" : "bg-white"
                }`}
              >
                <Text className="font-medium text-md">{item.label}</Text>
                <Text className="font-medium text-sm">{item.day}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View className="flex-row justify-between">
            <Text className="text-start text-textColor text-2xl font-medium">
              Training
            </Text>
            <Link href="/(edit)/todo" className="text-textColor" asChild>
              {toggle ? (
                <TouchableOpacity>
                  <Text className="font-[700] text-blue-800  mt-1 bg-blue-200 p-[9px] rounded-lg text-[12px]">
                    Edit
                  </Text>
                </TouchableOpacity>
              ) : (
                ""
              )}
            </Link>
          </View>
          {toggle ? (
            <View className="justify-center items-center">
              <FlatList
                data={myTraining}
                renderItem={({ item }) => <Content item={item} />}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                bounces={false}
                onMomentumScrollEnd={updateCurrentSlideIndex}
              />
              <View className="flex-row gap-4 mt-4">
                {myTraining.map((_, index) => (
                  <View
                    key={index}
                    className={`h-[4px]  flex-row rounded-lg  ${
                      currentSlide === index
                        ? "bg-blue-400 w-[30px] transition duration-250 ease-in delay-100"
                        : "bg-gray-100 w-[15px] transition duration-250 ease-in delay-100"
                    }`}
                  />
                ))}
              </View>
            </View>
          ) : (
            <View className="NO justify-center flex items-center gap-2 p-14 relative border-dashed border border-gray-400 ">
              <Link href="/(edit)/edit" className="" asChild>
                <TouchableOpacity>
                  <FontAwesome6 name="notes-medical" size={25} color="white" />
                </TouchableOpacity>
              </Link>

              <Text className="text-gray-600 mt-3 font-medium text-[20px] text-center w-[300px]">
                Add Groundstroke Training
              </Text>
            </View>
          )}
          <View className="gap-4">
            <Text className="text-start text-textColor text-3xl font-medium">
              Daily Challenges
            </Text>

            <View className="gap-3">
              <View className="bg-blue-300 rounded-md p-3 ">
                <View className="flex-row justify-between">
                  <Text className="font-medium">
                    Make less than 10 net errors
                  </Text>
                  <Checkbox />
                </View>
              </View>
              <View className="bg-blue-300 rounded-md p-3">
                <View className="flex-row justify-between">
                  <Text className="font-medium">Hit 2 Aces</Text>
                  <Checkbox />
                </View>
              </View>
            </View>

            <Text className="text-textColor mt-2 font-medium">
              Plan Your Practice, complete skill challenges, imrpove your skills
            </Text>
          </View>
        </View>







        const Content = ({ item }: any) => {
  return (
    <View
      key={item.title}
      className="bg-[#1d293b] rounded-lg gap-3 w-[322.2px] "
    >
      {/* Header */}
      <View className="p-6 header border-b-2 border-cyan-400 flex-row justify-between">
        <Text className="text-textColor font-bold ml-2 text-[19px] ">
          {item.title}
        </Text>
        <Text className="text-textColor mr-3">{item.duration}</Text>
      </View>

      {/* Tasks */}
      <View className="pl-7 pt-3 pb-8 gap-3">
        {item.tasks.map((task: any, index: number) => (
          <View key={task.label} className="flex-row justify-start gap-4">
            {/* <Checkbox /> */}

            <Text className="mt-[1px] text-textColor font-medium text-[15px]  ">
              <Text className="font-md text-pink-400">{index + 1}. </Text>{" "}
              {task.label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};
