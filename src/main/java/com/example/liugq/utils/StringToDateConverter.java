package com.example.liugq.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.lang3.StringUtils;
import org.springframework.core.convert.converter.Converter;

/**
 * @author UFC_Qing
 * @version 创建时间：2018年11月5日 下午1:41:12
 * @ClassName StringToDateConverter
 * @Description 处理表单提交的日期格式数据
 */

public class StringToDateConverter implements Converter<String,Date> {
    private static final String dateFormat = "yyyy-MM-dd HH:mm:ss";
    private static final String shortDateFormat = "yyyy-MM-dd";
    private static final String dateFormat2 = "yyyy/MM/dd HH:mm:ss";
    private static final String shortDateFormat2 = "yyyy/MM/dd";
    
    @Override
    public Date convert(String source) {
        if (StringUtils.isEmpty(source)) {
            return null;
        }
        source = source.trim();
        try {
            SimpleDateFormat formatter;
            if (source.contains("-")) {
                if (source.contains(":")) {
                    formatter = new SimpleDateFormat(dateFormat);
                } else {
                    formatter = new SimpleDateFormat(shortDateFormat);
                }
                Date dtDate = formatter.parse(source);
                return dtDate;
            } else if (source.contains("/")) {
                if (source.contains(":")) {
                    formatter = new SimpleDateFormat(dateFormat2);
                } else {
                    formatter = new SimpleDateFormat(shortDateFormat2);
                }
                Date dtDate = formatter.parse(source);
                return dtDate;
            }
        } catch (Exception e) {
            throw new RuntimeException(String.format("parser %s to Date fail", source));
        }

        throw new RuntimeException(String.format("parser %s to Date fail", source));

    }
}
