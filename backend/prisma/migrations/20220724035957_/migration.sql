-- AlterTable
ALTER TABLE `user` MODIFY `username` VARCHAR(191) NULL;

-- RedefineIndex
CREATE UNIQUE INDEX `user_username_key` ON `user`(`username`);
DROP INDEX `User_username_key` ON `user`;
