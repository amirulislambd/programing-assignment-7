'use client'

import { frContext } from "@/context/FriendContext";
import { notFound } from "next/navigation";
import { useContext } from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const StatsPage = () => {
    const { friendData } = useContext(frContext);
    console.log(friendData)
    if(!friendData||friendData.length ===0){
        return notFound()
    }
    const audio = friendData.filter(f=>f.type==='audio').length
    const video = friendData.filter(f=>f.type==='video').length
    const text = friendData.filter(f=>f.type==='text').length

    const data = [
        { name: 'Call', value: audio, fill: '#1C4C4A' },
        { name: 'Video', value: video, fill: '#7e50d9' },
        { name: 'Text', value: text, fill: '#15962f' },
        
      ];
      

      return (
        <div className="flex items-center justify-center max-w-7xl mx-5 lg:mx-auto h-[572px] lg:h-[532px]  w-full border-2 border-zinc-100 rounded-xl my-5  p-5">
          <div className="w-[400px] h-[300px]">

            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        innerRadius="75%"
                        outerRadius="100%"
                        cornerRadius={10} 
                        paddingAngle={8}  
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    <Tooltip />
                    <Legend verticalAlign="bottom" />
                </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
    );
};

export default StatsPage;