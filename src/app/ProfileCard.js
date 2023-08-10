const ProfileCard = () => {
	return (
		<div class="w-[293px] h-[451px] p-[10px] border rounded-md flex flex-col justify-center">
			<div class="h-[236px]">
				<img
					class="rounded-[10px]"
					src="images\profileImage1.png"
				/>
			</div>
			<div class="mt-[11px]">
				<p class="text-[20px] font-semibold">Oluwaseyi Daniels</p>
				<div class="flex flex-row justify-evenly ml-[-13px] mt-[10px]">
					<img src="images\draft-icon.svg" />
					<span>Frontend Developer at ZIP.co</span>
				</div>
				<div class="text-[12px] flex flex-row justify-evenly mr-[70px] mt-[10px]">
					<img
						class="w-[11px] ml-[-42px]"
						src="images\Vector (12).svg"
					/>
					<span class="ml-[-29px] pl-[2px]">0 sessions (0 reviews)</span>
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
