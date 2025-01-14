import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

export default function profile() {
  return (
    <SafeAreaView className="bg-bgColor flex-1">
      <View className="mx-6 my-6">
        <View className="flex-row  pt-2 ">
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <View className="flex-1 items-center mr-5">
            <Text className="text-textColor font-medium text-2xl ">
              Baseline Flows
            </Text>
          </View>
        </View>

        {/* <View className="mt-5">
          <Text className="text-sky-500 text-[16px] font-medium ">
            The Serve
          </Text>
          <Text className="text-slate-400 mt-1 text-[14px]">
            Having the right intention when ask him....Read More
          </Text>
        </View> */}

        <View className="">
          <View className="gap-2  border-b-2 pb-5 border-slate-600">
            <Text className="text-slate-300 font-bold text-lg mt-3">
              Warm Up
            </Text>
            <Text className="text-slate-400">
              Mini Tennis - Get the legs moving and grooving
            </Text>
            <Text className="text-slate-400">
              Baseline - 25 hits in a row middle then cross on FH/BH
            </Text>

            <Text className="text-slate-300 bg-gray-800 rounded-md p-4 py-3">
              Note: Pay attention to details of each balls such as it depth,
              height and pace and adjust
            </Text>
          </View>

          <View className="gap-2  border-b-2 pb-5 border-teal-600">
            <Text className="text-slate-300 font-bold text-lg mt-3">
              Ground Strokes
            </Text>
            <Text className="text-slate-400">
              Depth - Hit 2 good depth shots in a row land pass the service line
              -- 10 minutes both side
            </Text>
            <Text className="text-slate-400">
              Change of Direction: 2 shots cross court and one shot down the
              line
            </Text>
            <Text className="text-slate-400">
              Short angles: Aim for wider angles and closer to service line and
              open up the court
            </Text>
            <Text className="text-slate-300 bg-gray-800 rounded-md p-4 py-3">
              Note: Pay attention to details of each balls such as it depth,
              height and pace and adjust
            </Text>
          </View>
          <View className="gap-2  border-b-2 pb-5 border-sky-600">
            <Text className="text-slate-300 font-bold text-lg mt-3">
              Point Play
            </Text>
            <Text className="text-slate-400">
              Serve body - start by body serve for high serve percentage
            </Text>
            <Text className="text-slate-400">
              <Text className="text-slate-400">
                Serve outwide - on both side and look for forehand right after
              </Text>
            </Text>
            <Text className="text-slate-400">
              Serve and Volley: a good way to mix it up and surprise your
              opponent
            </Text>
            <Text className="text-slate-300 bg-gray-800 rounded-md p-3">
              Note: Pay attention to details of each balls such as it depth,
              height and pace and adjust
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

//  <TouchableOpacity
//                 key={index}
//                 onPress={() => {
//                   router.push("/(edit)/program-page");
//                 }}
//               ></TouchableOpacity>
