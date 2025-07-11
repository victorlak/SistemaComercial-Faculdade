import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Barbeiro } from "../types/user";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Profile: undefined;
  Splash: undefined;
  NewMember: {memberToEdit?: Barbeiro};
  Equipe: undefined;
};

export type SplashScreenProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;