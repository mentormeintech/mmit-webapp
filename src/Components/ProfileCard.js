const ProfileCard = () => {
	return (
		<div className="w-[270px] whitespace-nowrap h-[400px] ml-[25px] mt-[30px]  border rounded flex flex-col justify-center">
			<div className="h-[236px]">
				<img
					className="rounded-t-lg"
					src="images\profileImage1.png"
				/>
			</div>
			<div className="mt-[10px]">
				<p className="text-[20px] ml-[5px] font-semibold">Oluwaseyi Daniels</p>
				<div className="flex flex-col mt-[10px] ml-[-10px]">
					<div className="flex text-[12px] flex-row justify-evenly ml-[-20px] ">
						<img
							className="ml-[-15px]"
							src="images\draft-icon.svg"
						/>
						<span className="ml-[-40px]">Frontend Developer at ZIP.co</span>
					</div>
					<div className="text-[12px] flex flex-row justify-evenly ml-[-14px] mt-[10px]">
						<img
							className="w-[11px] ml-[-60px]"
							src="images\Vector (12).svg"
						/>
						<span className="ml-[-82px]">0 sessions (0 reviews)</span>
					</div>
				</div>
			</div>
			<div className="text-[12px] p-[10px] h-16 bg-zinc-300 bg-opacity-50 pt-[14px] mt-[1rem] rounded flex flex-row justify-between backdrop:">
				<div>
					<p className="text-neutral-700 text-opacity-70 text-xs font-medium">
						Experience
					</p>
					<p className="font-[600]">7 years</p>
				</div>
				<div>
					<p className="text-neutral-700 text-opacity-70 text-xs font-medium">
						Avg.Attendance
					</p>
					<p className="font-[600] text-black text-xs">100%</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
