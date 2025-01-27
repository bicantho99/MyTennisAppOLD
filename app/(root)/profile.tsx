import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function profile() {
  return (
    <SafeAreaView className="bg-bgColor flex-1">
      <View className="mx-6 my-6">
        <Text className="text-[28px] text-textColor font-medium">Profile</Text>

        <View className="border-b pb-7 pt-5 border-slate-400">
          <Text className="text-teal-50 text-xl">Feature Request:</Text>
          <TextInput
            className="bg-gray-800 p-4 rounded-md text-white border-teal-300 border mt-5"
            placeholder="Email"
            placeholderTextColor={"gray"}
          />
          <TextInput
            className="bg-gray-800 px-3 py-6 rounded-lg border-teal-300 border text-white mt-5"
            placeholder="Help improve app or report an issue..."
            placeholderTextColor={"gray"}
            editable
            multiline
          />
          <TouchableOpacity>
            <Text className="mt-5 bg-slate-300 rounded-lg p-3 text-xl font-medium text-center">
              Send
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text className="mt-5 text-textColor rounded-lg p-4 text-xl font-medium pl-6 border-teal-400 border shadow-md shadow-slate-400">
            Leave a Review
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text className="mt-5 text-textColor rounded-lg p-4 text-xl font-medium pl-6 border border-blue-400">
            Merch
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text className="mt-5 text-textColor rounded-lg p-4 text-xl font-medium pl-6 border border-blue-400">
            Connect with The Coaches
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text className="mt-5 text-textColor rounded-lg p-4 text-xl font-medium pl-6 border border-blue-400">
            Delete Account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text className="mt-5 text-textColor rounded-lg p-4 text-xl font-medium pl-6 border border-blue-400">
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
