import { ApiProperty } from "@nestjs/swagger";

export enum UserUpdateUserProfileResponseError {
  PERMISSION_DENIED = "PERMISSION_DENIED",
  NO_SUCH_USER = "NO_SUCH_USER",
  WRONG_OLD_PASSWORD = "WRONG_OLD_PASSWORD",
  DUPLICATE_USERNAME = "DUPLICATE_USERNAME",
  DUPLICATE_EMAIL = "DUPLICATE_EMAIL"
}

export class UserUpdateUserProfileResponseDto {
  @ApiProperty()
  error?: UserUpdateUserProfileResponseError;
}
