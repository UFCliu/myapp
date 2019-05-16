package com.example.liugq.bean.dzm;

import java.io.Serializable;

public class ShengXing implements Serializable {
    private Integer id;

    private String type;

    private Long name;

    private Long pozhao;

    private Long shanbi;

    private Long gedang;

    private Long baoji;

    private Long mingzhong;

    private Long fangbao;

    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type == null ? null : type.trim();
    }

    public Long getName() {
        return name;
    }

    public void setName(Long name) {
        this.name = name;
    }

    public Long getPozhao() {
        return pozhao;
    }

    public void setPozhao(Long pozhao) {
        this.pozhao = pozhao;
    }

    public Long getShanbi() {
        return shanbi;
    }

    public void setShanbi(Long shanbi) {
        this.shanbi = shanbi;
    }

    public Long getGedang() {
        return gedang;
    }

    public void setGedang(Long gedang) {
        this.gedang = gedang;
    }

    public Long getBaoji() {
        return baoji;
    }

    public void setBaoji(Long baoji) {
        this.baoji = baoji;
    }

    public Long getMingzhong() {
        return mingzhong;
    }

    public void setMingzhong(Long mingzhong) {
        this.mingzhong = mingzhong;
    }

    public Long getFangbao() {
        return fangbao;
    }

    public void setFangbao(Long fangbao) {
        this.fangbao = fangbao;
    }

    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        ShengXing other = (ShengXing) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getType() == null ? other.getType() == null : this.getType().equals(other.getType()))
            && (this.getName() == null ? other.getName() == null : this.getName().equals(other.getName()))
            && (this.getPozhao() == null ? other.getPozhao() == null : this.getPozhao().equals(other.getPozhao()))
            && (this.getShanbi() == null ? other.getShanbi() == null : this.getShanbi().equals(other.getShanbi()))
            && (this.getGedang() == null ? other.getGedang() == null : this.getGedang().equals(other.getGedang()))
            && (this.getBaoji() == null ? other.getBaoji() == null : this.getBaoji().equals(other.getBaoji()))
            && (this.getMingzhong() == null ? other.getMingzhong() == null : this.getMingzhong().equals(other.getMingzhong()))
            && (this.getFangbao() == null ? other.getFangbao() == null : this.getFangbao().equals(other.getFangbao()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getType() == null) ? 0 : getType().hashCode());
        result = prime * result + ((getName() == null) ? 0 : getName().hashCode());
        result = prime * result + ((getPozhao() == null) ? 0 : getPozhao().hashCode());
        result = prime * result + ((getShanbi() == null) ? 0 : getShanbi().hashCode());
        result = prime * result + ((getGedang() == null) ? 0 : getGedang().hashCode());
        result = prime * result + ((getBaoji() == null) ? 0 : getBaoji().hashCode());
        result = prime * result + ((getMingzhong() == null) ? 0 : getMingzhong().hashCode());
        result = prime * result + ((getFangbao() == null) ? 0 : getFangbao().hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", type=").append(type);
        sb.append(", name=").append(name);
        sb.append(", pozhao=").append(pozhao);
        sb.append(", shanbi=").append(shanbi);
        sb.append(", gedang=").append(gedang);
        sb.append(", baoji=").append(baoji);
        sb.append(", mingzhong=").append(mingzhong);
        sb.append(", fangbao=").append(fangbao);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}