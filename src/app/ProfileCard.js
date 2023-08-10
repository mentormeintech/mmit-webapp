const ProfileCard = () => {
	return (
		<div class="w-[270px] whitespace-nowrap h-[400px] ml-[25px] mt-[30px]  border rounded-t-lg] flex flex-col justify-center">
			<div class="h-[236px]">
				<img
					class="rounded-t-lg"
					src="images\profileImage1.png"
				/>
			</div>
			<div class="mt-[10px]">
				<p class="text-[20px] ml-[5px] font-semibold">Oluwaseyi Daniels</p>
				<div class="flex flex-col mt-[10px] ml-[-10px]">
					<div class="flex text-[12px] flex-row justify-evenly ml-[-20px] ">
						<img
							class="ml-[-15px]"
							src="images\draft-icon.svg"
						/>
						<span class="ml-[-40px]">Frontend Developer at ZIP.co</span>
					</div>
					<div class="text-[12px] flex flex-row justify-evenly ml-[-14px] mt-[10px]">
						<img
							class="w-[11px] ml-[-60px]"
							src="images\Vector (12).svg"
						/>
						<span class="ml-[-82px]">0 sessions (0 reviews)</span>
					</div>
				</div>
			</div>
			<div class="text-[12px] p-[10px] h-16 bg-zinc-300 bg-opacity-50 pt-[14px] mt-[1rem] rounded flex flex-row justify-between backdrop:">
				<div>
					<p class="text-neutral-700 text-opacity-70 text-xs font-medium">
						Experience
					</p>
					<p class="font-[600]">7 years</p>
				</div>
				<div>
					<p class="text-neutral-700 text-opacity-70 text-xs font-medium">
						Avg.Attendance
					</p>
					<p class="font-[600] text-black text-xs">100%</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
